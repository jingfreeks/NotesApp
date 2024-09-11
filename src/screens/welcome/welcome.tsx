import {Button, Text, Vcontainer} from '@/component';
import {Content} from './component/content';
import {FooterContainer, ButtonContainer,Separator} from './styles';
import {welcomeText} from './constant'
import {useWelcomeHooks} from './hooks'
const welcome = () => {

  const {handleSignup,handleLogin}=useWelcomeHooks()
  return (
    <Vcontainer alignType="center" justify="center">
      <Content title={welcomeText.title} subtitle={welcomeText.subTitle} />
      <FooterContainer>
        <ButtonContainer>
          <Button bcolor="transparent" border={1} onPress={handleSignup}>
            <Text>Sign-Up</Text>
          </Button>
        </ButtonContainer>
        <Separator />
        <ButtonContainer>
          <Button bcolor="transparent" border={1} onPress={handleLogin}>
            <Text>Sign-In</Text>
          </Button>
        </ButtonContainer>
      </FooterContainer>
    </Vcontainer>
  );
};

export default welcome;
