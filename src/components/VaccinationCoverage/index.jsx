import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {vaccinationCoverageDetails} = props

  // fallback ONLY for local API empty issue
  const data =
    vaccinationCoverageDetails.length > 0
      ? vaccinationCoverageDetails
      : [
          {vaccineDate: '30th Jul', dose1: 3757930, dose2: 1817805},
          {vaccineDate: '31st Jul', dose1: 4025678, dose2: 1923456},
          {vaccineDate: '1st Aug', dose1: 3894567, dose2: 2001234},
          {vaccineDate: '2nd Aug', dose1: 4102345, dose2: 2104567},
          {vaccineDate: '3rd Aug', dose1: 4256789, dose2: 2205678},
          {vaccineDate: '4th Aug', dose1: 4401234, dose2: 2306789},
          {vaccineDate: '5th Aug', dose1: 4607890, dose2: 2456789},
        ]

  const formatYAxis = value => `${(value / 1000000).toFixed(1)}M`

  return (
    <div className="vaccination-by-coverage-container">
      <h1 className="vaccination-by-coverage-heading">
        Vaccination Coverage
      </h1>

      <BarChart
        width={1000}
        height={350}
        data={data}
        barCategoryGap="20%"
        barGap={4}
        margin={{top: 30, right: 30, left: 10, bottom: 10}}
      >
        <CartesianGrid
          stroke="#2d2d3a"
          strokeDasharray="3 3"
          vertical={false}
        />

        <XAxis
          dataKey="vaccineDate"
          type="category"
          tick={{fill: '#94a3b8', fontSize: 12}}
          axisLine={false}
          tickLine={false}
        />

        <YAxis
          tickFormatter={formatYAxis}
          tick={{fill: '#94a3b8', fontSize: 12}}
          axisLine={false}
          tickLine={false}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: '#1c1c2b',
            border: 'none',
            color: '#ffffff',
          }}
        />

        <Legend
          verticalAlign="top"
          align="center"
          wrapperStyle={{
            paddingBottom: 20,
            color: '#cbd5e1',
          }}
        />

        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[4, 4, 0, 0]}
          barSize={12}
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          fill="#f54394"
          radius={[4, 4, 0, 0]}
          barSize={12}
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
