import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Contribute',
    Svg: require('@site/static/img/features/bookmark.svg').default,
    description: (
      <>
        Check our ReadMe on the{' '}
        <a href='https://github.com/HermesProtocol-io/assets'>Assets repo</a>{' '}
        for instructions on how to get your project supported by us.
      </>
    ),
  },
  {
    title: 'Platform Documentation',
    Svg: require('@site/static/img/features/book.svg').default,
    description: (
      <>
        See <a href='https://docs.hermesprotocol.io'>our documentation</a>{' '}
        regarding our web app and our suite of bots.
      </>
    ),
  },
  {
    title: 'About us',
    Svg: require('@site/static/img/features/hermes.svg').default,
    description: (
      <>
        Visit <a href='https://hermesprotocol.io/'>our homepage</a> to learn
        more about what problems we are solving and how.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg
          className={styles.featureSvg}
          role='img'
        />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <div className={styles.flex}>
      <section className={styles.features}>
        <div className='container'>
          <div className='row'>
            {FeatureList.map((props, idx) => (
              <Feature
                key={idx}
                {...props}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
