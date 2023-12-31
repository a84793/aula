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
    title: 'A Melhor mecânica',
    Svg: require('@site/static/img/car.svg').default,
    description: (
      <>
        Somos a melhor oficina da regiao.
      </>
    ),
  },
  {
    title: 'Manutenção Rapida',
    Svg: require('@site/static/img/time.svg').default,
    description: (
      <>
        Vamos Entregar seu veiculo nas melhores condições possiveis.
      </>
    ),
  },
  {
    title: 'Melhor localizacõo',
    Svg: require('@site/static/img/location.svg').default,
    description: (
      <>
        Estamos bem localizados, Rua Mnuel Cbrita Teodosio 8135-155.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}