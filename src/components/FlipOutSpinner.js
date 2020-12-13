import { useEffect, useState, useRef } from 'react';

import styles from './FlipOutSpinner.module.css';

export default function FlipOutSpinner({ size = 'sm', color = 'black' }) {
  const [spinnerSize, spinnerSetSize] = useState('16px');

  const wrapper = useRef(null);
  const firstBlock = useRef(null);
  const secondBlock = useRef(null);
  const thirdBlock = useRef(null);
  const forthBlock = useRef(null);

  function reset() {
    secondBlock.current.classList.remove(`${styles.moveLeft}`);
    debugger;
    thirdBlock.current.classList.remove(`${styles.moveDown}`);
    debugger;
    forthBlock.current.classList.remove(`${styles.moveLeft}`);
    debugger;
    forthBlock.current.classList.remove(`${styles.moveDown}`);
    debugger;
  }

  function stepThree() {
    wrapper.current.classList.add(`${styles.spin}`);
    wrapper.current.addEventListener('animationend', reset);
    debugger;
  }

  function stepTwo() {
    thirdBlock.current.classList.add(`${styles.moveDown}`);
    forthBlock.current.classList.add(`${styles.moveDown}`);
    thirdBlock.current.addEventListener('transitionend', stepThree);
  }

  function stepOne() {
    secondBlock.current.classList.add(`${styles.moveLeft}`);
    forthBlock.current.classList.add(`${styles.moveLeft}`);
    forthBlock.current.addEventListener('transitionend', stepTwo);
  }

  function run() {
    stepOne();
  }

  useEffect(() => {
    switch (size) {
      case 'xs':
        spinnerSetSize('12px');
        break;
      case 'sm':
        spinnerSetSize('16px');
        break;
      case 'md':
        spinnerSetSize('20px');
        break;
      case 'lg':
        spinnerSetSize('24px');
        break;
      case 'xl':
        spinnerSetSize('28px');
        break;
      default:
        console.log('hi');
    }

    run();
  }, []);

  return (
    <div ref={wrapper} className={styles.wrapper}>
      <div
        ref={firstBlock}
        className={`${styles.block} ${styles.firstBlock}`}
      />
      <div
        ref={secondBlock}
        className={`${styles.block} ${styles.secondBlock}`}
      />
      <div
        ref={thirdBlock}
        className={`${styles.block} ${styles.thirdBlock}`}
      />
      <div
        ref={forthBlock}
        className={`${styles.block} ${styles.forthBlock}`}
      />
    </div>
  );
}
