import { View, StyleSheet } from 'react-native';
import SignUpEncabezado from './SignUpEncabezado';
import SignUpFormulario from './SignUpFormulario';
import SignUpFooter from './SignUpFooter';

function SignUp() {

    return (
        <View>
            <SignUpEncabezado/>
            <SignUpFormulario/>
            <SignUpFooter/>
        </View>
    );
    }

    const styles = StyleSheet.create({
    }
)

export default SignUp