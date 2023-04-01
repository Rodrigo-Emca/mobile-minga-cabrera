import { View, StyleSheet } from 'react-native';
import SignUpEncabezado from './SignUpEncabezado';
import SignInFormulario from './SignInFormulario';
import SignIpFooter from './SignInFooter';

function SignIn() {

    return (
        <View>
            <SignUpEncabezado/>
            <SignInFormulario/>
            <SignIpFooter/>
        </View>
    );
    }

    const styles = StyleSheet.create({
    }
)

export default SignIn