import hof from '../source/hof'
import OrgChart from 'react-orgchart'
import 'react-orgchart/index.css'
import "../style/styles.css"

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: hof
    }
  }
  render() {
    const { data } = this.state
    const node = ({node}) => {
      return (
        <div className="initechNode">{ node.title }</div>
      )
    }
    return (
      <div>
        <OrgChart tree={data} NodeComponent={node} />
      </div>
    )
  }
}

export default Index