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
    title: 'a melhor oficina da região',
    Svg: require('@site/static/img/icon-site.svg').default,
    description: (
      <>
        Somos a melhor oficina do algarve, conte conosco para resolver todos os seus problemas.
      </>
    ),
  },
  {
    title: 'Manutenção Rapida',
    Svg: require('@site/static/img/time.svg').default, 
    description: (
      <>
        entregamos o seu veiculo nas melhores condições possiveis
      </>
    ),
  },
  {
    title: 'Boa localização',
    Svg: require('@site/static/img/icon-local-2.svg').default,
    description: (
      <>
        Estamos localizados na Rua Manuel Cabrita Teodosio 8135-155.
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