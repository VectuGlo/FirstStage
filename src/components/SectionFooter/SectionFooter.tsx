import styles from './SectionFooter.module.css';
import Separator from '../Separator/Separator';
import cn from 'classnames';

const liContent = [
  {
    id: 'li1a',
    str: 'Asia Sales Auto.',
    col: false,
  },
  {
    id: 'li2a',
    str: 'Все права защищены.',
    col: true,
  },
  {
    id: 'li3a',
    str: 'Сайт носит информационный характер и не является публичной офертой.',
    col: false,
  },
];

function SectionFooter() {
  return (
    <>
      <div>
        <ul className={styles['footer-ul']}>
          {liContent.map((element) => {
            return (
              <li
                key={element.id}
                className={cn(styles['footer-li'], {
                  [styles['redus']]: element.col === true,
                })}
              >
                {element.str}
              </li>
            );
          })}
        </ul>
      </div>
      <Separator />
    </>
  );
}
export default SectionFooter;
