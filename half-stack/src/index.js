import React from 'react'
import ReactDOM from 'react-dom'

const Otsikko = (props) => {
    const otsikko = props.name

    return (
      <h1>{otsikko}</h1>
    )
}

const Osa = (props) => {
  const nimi = props.osa.nimi
  const tehtavia = props.osa.tehtavia

  return (
      <p>{nimi} {tehtavia}</p>
  )
}

const Sisalto = (props) => {
  const osa1 = props.osat[0]
  const osa2 = props.osat[1]
  const osa3 = props.osat[2]

  return (
    <div>
      <Osa osa={osa1} />
      <Osa osa={osa2} />
      <Osa osa={osa3} />
    </div>
  )
}

const Yhteensa = (props) => {
  const lkm = props.lkm

  return (
    <p>yhteensä {lkm} tehtävää</p>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko name={kurssi} />
      <Sisalto osat={[osa1, osa2, osa3]} />
      <Yhteensa lkm={osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)