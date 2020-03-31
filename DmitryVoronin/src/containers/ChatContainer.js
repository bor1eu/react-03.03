import {Chat} from '../components/Chat/Chat';
export const ROBOT = 'Robot';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {sendMessage} from '../store/chatActions';


const mapStateToProps = (store, props) => {
    const {
        id
    } = props.match.params;
    const chats = id && store.chats.chats ? store.chats.chats : {}

    return {
        isLoading: store.chats.isLoading,
        error: store.chats.error,
        messages: chats[id] ? chats[id].messages : undefined,
    }

}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    sendMessage
}, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const {
        id
    } = ownProps.match.params;

    const onSendMessage = ({
        name,
        content
    }) => {
        dispatchProps.sendMessage(id, name, content)
    }

    return {
        isLoading: stateProps.isLoading,
        error: stateProps.error,
        messages: stateProps.messages,
        onSendMessage
    }
}
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Chat);