import {Button, Text, Vcontainer} from '@/component';
import {Content} from './component/content';
import {FooterContainer, ButtonContainer,Separator} from './styles';
import {welcomeText} from './constant'
const welcome = () => {
  return (
    <Vcontainer alignType="center" justify="center">
      <Content title={welcomeText.title} subtitle={welcomeText.subTitle} />
      <FooterContainer>
        <ButtonContainer>
          <Button bcolor="transparent" border={1} onPress={() => {}}>
            <Text>Sign-Up</Text>
          </Button>
        </ButtonContainer>
        <Separator />
        <ButtonContainer>
          <Button bcolor="transparent" border={1} onPress={() => {}}>
            <Text>Sign-In</Text>
          </Button>
        </ButtonContainer>
      </FooterContainer>
    </Vcontainer>
  );
};

export default welcome;
