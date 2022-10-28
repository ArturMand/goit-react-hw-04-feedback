import PropTypes from 'prop-types';
import { Button, List, ListItem } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <List>
    {options.map(option => (
      <ListItem key={option}>
        <Button type="button" onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      </ListItem>
    ))}
  </List>
);
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
