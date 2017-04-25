import {findDOMNode} from 'react-dom';

import PopupMenu from '../popup-menu/popup-menu';
import HTTP from '../http/http';

const LAYOUT = {
  DEFAULT: 'default',
  COMPACT: 'compact'
};

/**
 * @namespace
 */
export default class HeaderHelper {
  static layout = LAYOUT;

  /**
   * @param {Header} header
   * @param {Auth} auth
   * @param {Object=} params
   * @deprecated
   * @return {Promise}
   */
  static setServicesList(header, auth, params) {
    const {SERVICES} = header.constructor.MenuItemType;
    const allFields = 'id,name,applicationName,homeUrl,iconUrl';
    const countFields = 'key';

    const http = new HTTP(auth, auth.getAPIPath());
    function getServices(fields) {
      return http.get(`services/header?fields=${fields}`, params);
    }

    function setServicesList(services) {
      // Just in case
      header.setMenuItemEnabled(SERVICES, services.length > 0);

      header.setServicesList(services);
      header.rerender({
        onServicesOpen: null,
        onServicesClose: null
      });

      if (header.services.state.loading) {
        header.services.setOpened(true);
        header.services.setLoading(false);
      }
    }

    header.rerender({
      clientId: header.props.clientId || auth.config.client_id,
      onServicesOpen: () => {
        header.services.setLoading(true);
        getServices(allFields).then(setServicesList);
      },
      onServicesClose: () => header.services.setLoading(false)
    });

    getServices(countFields).then(services => header.setMenuItemEnabled(SERVICES, services.length > 0));
  }

  /**
   * @param {Header} header
   * @param {Auth} auth
   * @param {{ logout: string, profile: string }=} customTranslationsDict
   * @return {Promise}
   */
  static setUserMenu(header, auth, customTranslationsDict) {
    const translationsDict = Object.assign({
      logout: 'Log out',
      profile: 'Profile'
    }, customTranslationsDict);

    let popup = null;

    return auth.requestUser().then(response => {
      if (response.guest) {
        HeaderHelper._renderLoginButton(header, auth);
        return;
      }

      if (response.profile && response.profile.avatar && response.profile.avatar.url) {
        header.setProfilePicture(response.profile.avatar.url);
      }

      header.userMenu.setTitle(response.name);

      const popupData = [
        {
          label: translationsDict.profile,
          rgItemType: PopupMenu.ListProps.Type.LINK,
          target: '_self',
          href: [auth.config.serverUri, 'users/', response.id].join('')
        },
        {
          label: translationsDict.logout,
          rgItemType: PopupMenu.ListProps.Type.LINK,
          onClick: () => auth.logout()
        }
      ];

      header.rerender({
        profilePopupData: popupData,

        onUserMenuOpen: () => {
          popup = PopupMenu.renderPopup(PopupMenu.factory({
            anchorElement: findDOMNode(header.userMenu),
            data: header.props.profilePopupData,
            directions: [PopupMenu.PopupProps.Directions.BOTTOM_LEFT],
            onClose: () => header.userMenu.setOpened(false)
          }));
        },

        onUserMenuClose: () => {
          if (popup) {
            popup.remove();
            popup = null;
          }
        }
      });
    }, error => {
      // Show login button when something went wrong
      HeaderHelper._renderLoginButton(header, auth);
      return Promise.reject(error);
    });
  }

  /**
   * @param {Header} header
   * @param {Auth} auth
   * @private
   */
  static _renderLoginButton(header, auth) {
    header.setMenuItemEnabled(header.constructor.MenuItemType.USER_MENU, false);
    header.setMenuItemEnabled(header.constructor.MenuItemType.LOGIN, true);

    header.rerender({
      // Temporary revert to previous behavior: use logout for login
      onLoginClick: () => auth.logout()
    });
  }

  /**
   * 800px is a threshold when navigation menu should be transformed into popup-menu
   * @returns {string}
   */
  static getLayoutType() {
    let layout = HeaderHelper.layout.DEFAULT;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (windowWidth <= 800) {
      layout = HeaderHelper.layout.COMPACT;
    }
    return layout;
  }
}
