import Marty from 'marty';
import Score from '../../components/Score/Score';

export default Marty.createContainer(Score, {
  
  listenTo: 'gridStore',
  
  componentDidMount() {
  }
});