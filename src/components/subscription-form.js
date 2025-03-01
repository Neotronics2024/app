/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {

  return (
    <Flex type="button"sx={styles.form} {...props}>
      <Button style={{marginLeft: "auto", marginRight: "auto", display: "flex"}} onClick={()=>window.location = "/contact"}>
        {buttonLabel ?? 'Connect with us!'}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [60],
      height: 'auto',
      width: 'auto',
    },
    button: {
      ml: [3],
    },
  },
};
