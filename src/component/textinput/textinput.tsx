// @ts-check
import {useState, ReactElement} from 'react';
import {Text} from '../text';
import IconIonic from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '@/utils/themes';
import type {TextInputProps} from './types';
import {TextInputStyled, LineTextStyled,MainContainerStyled,TextInputContainerStyled} from './styles';

const TextInput = (props: TextInputProps): ReactElement => {
  const {
    Label,
    onChangeText,
    value,
    type = 'Text',
    isError = false,
    errmessage = '',
    placeholder = '',
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <MainContainerStyled>
      <Text TextMode="Title">{Label}</Text>
      <TextInputContainerStyled>
        <TextInputStyled
          {...rest}
          autoCapitalize="none"
          placeholder={placeholder}
          secureTextEntry={type === 'Text' ? isVisible : !isVisible}
          value={value}
          onChangeText={onChangeText}
        />
        {type === 'Text' ? (
          <IconIonic color={colors.gray} name={'close-circle'} size={25} />
        ) : (
          <MaterialIcons
            color={colors.gray}
            name={isVisible ? 'visibility-off' : 'visibility'}
            size={25}
            onPress={() => setIsVisible(!isVisible)}
          />
        )}
      </TextInputContainerStyled>
      <LineTextStyled />
      {isError && <Text TextMode="ErrorText">{errmessage}</Text>}
    </MainContainerStyled>
  );
};
export default TextInput;
