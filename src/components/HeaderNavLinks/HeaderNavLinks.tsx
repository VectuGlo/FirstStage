import { Link as LinkScroll } from 'react-scroll';
import { Link, useLocation } from '@tanstack/react-router';
import stylesBootstrap from 'bootstrap/dist/css/bootstrap.min.module.css';
import styles from './HeaderNavLinks.module.css';
import cn from 'classnames';
import HeaderLink from '../HeaderLink/HeaderLink';

const linksScroll = [
  {
    id: 'navLink01',
    textLink: 'Этапы работы',
    scrollTo: 'SectionWorkStages',
    hR: '/'
  },
  {
    id: 'navLink02',
    textLink: 'Наши клиенты',
    scrollTo: 'SectionClientSwiper',
    hR: '/'
  },
  { id: 'navLink03', textLink: 'Контакты', scrollTo: 'Contacts', hR: '/' }
];

const linksTo = [
  {
    id: 'navLink04',
    textLink: 'Аукционы онлайн',
    scrollTo: '#AO',
    hR: '/auctions'
  },
  {
    id: 'navLink05',
    textLink: 'Онлайн калькулятор',
    scrollTo: '#OK',
    hR: '/calculate'
  }
];

function HeaderNavLinks() {
  const path = useLocation().pathname;

  return (
    <div className={cn(stylesBootstrap['col-md-6'])}>
      <ul
        className={cn(
          stylesBootstrap['nav'],
          stylesBootstrap['align-items-center'],
          stylesBootstrap['justify-content-start']
        )}
      >
        {path !== '/' ? (
          <HeaderLink>
            <Link
              to="/"
              activeProps={{
                className: cn(styles['active'])
              }}
            >
              На главную
            </Link>
            {/* {linksScroll.map((item) => {
              return (
                <Link
                  to={item.scrollTo}
                  activeProps={{
                    className: cn(styles['active'])
                  }}
                >
                  {item.textLink}
                </Link>
              );
            })} */}
          </HeaderLink>
        ) : (
          linksScroll.map((item) => {
            return (
              <HeaderLink key={item.id}>
                <LinkScroll
                  activeClass={cn(styles['active'])}
                  to={item.scrollTo}
                  spy={true}
                  smooth={true}
                  offset={-110}
                  duration={50}
                >
                  {item.textLink}
                </LinkScroll>
              </HeaderLink>
            );
          })
        )}

        {linksTo.map((item) => {
          return (
            <HeaderLink key={item.id}>
              <Link
                to={item.hR}
                activeProps={{
                  className: cn(styles['active'])
                }}
              >
                {item.textLink}
              </Link>
            </HeaderLink>
          );
        })}
      </ul>
    </div>
  );
}

export default HeaderNavLinks;
