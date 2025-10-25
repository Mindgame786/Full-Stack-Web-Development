import './App.css'
import GetDataCheckBox from './GetDataCheckBox';
import GetDataRadioDropDown from './GetDataRadioDropDown';
import Section from './Section';
// import TableArrays from './TableArrays';
// import TableArrayWithAi from './TableArrayWithAi';
import SimpleTable from './SimpleTable';
import TableGraphData from './TableGraphData';
import WithAISelectCityGender from './WithAISelectCityGender';

function App() {
  return (
    <>
      <h1 className='text-4xl font-sans font-bold bg-zinc-50 text-pink-400 rounded-md text-shadow-sm text-shadow-zinc-600 inset-shadow-zinc-300 inset-shadow-sm py-4'>
        React + Vite + Tailwind
      </h1>

      <GetDataCheckBox />
      <GetDataRadioDropDown />
      <SimpleTable />
      {/* <TableGraphData /> */}
      {/* <TableArrays /> */}
      {/* <TableArrayWithAi /> */}
      {/* <WithAISelectCityGender /> */}
      {/* <Section /> */}


    </>
  )
}

export default App;