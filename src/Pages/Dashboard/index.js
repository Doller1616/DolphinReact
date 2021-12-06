import { connect } from 'react-redux'
import Dashboard from './dashMainPage'
import { requestData } from './Action/dashMainAction'


const mapStateToProps = (state) => ({
    data : state?.dashMainPage
});

const mapDispatchToProps = (dispatch) => ({
    fetchData : (payload)=> dispatch(requestData(payload))
});


export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)