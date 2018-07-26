import hof from '../source/hof'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: hof
    }
  }
  render() {
    const { data } = this.state
    return (
      <div></div>
    )
  }
}

export default Index