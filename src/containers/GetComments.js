import { connect } from 'react-redux'
import Details from '../components/Details'


const mapStateToProps = state => {
    return {
        comments: state
    }   
}

const GetComments =  connect(mapStateToProps)(Details)
export default GetComments