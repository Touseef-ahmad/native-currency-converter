import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { ConversionInput, Button } from '../../components';
import { fetchExchangeRates } from '../../api';
import { COLORS } from '../../contants';

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.blue,
  },
  errorContainer: {
    borderColor: 'red',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    textAlign: 'center',
  },
  errorText: {
    color: COLORS.white,
    fontSize: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 10,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
});

export const Home = ({ navigation }) => {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [quoteCurrency, setQuoteCurrency] = useState('GBP');
  const [value, setValue] = useState('');
  const [conversionRate, setConversionRate] = useState(165.72);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    const getCoversionRate = async () => {
      const data = await fetchExchangeRates(baseCurrency, quoteCurrency);
      if (data.message) {
        setError(true);
        setErrorMessage(data.message);
        setConversionRate(0);
      } else {
        setConversionRate(data.rates[quoteCurrency]);
      }
    };
    getCoversionRate();
  }, [baseCurrency, quoteCurrency]);
  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
    setConversionRate(1 / conversionRate);
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor={COLORS.blue} />
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.push('Options')}>
          <Entypo name='cog' size={32} color='white' />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode='contain'
            style={styles.logoBackground}
            source={require('../../assets/images/background.png')}
          />
          <Image
            resizeMode='contain'
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
        </View>
        <Text style={styles.textHeader}>Currency Converter</Text>
        <View style={styles.inputContainer}>
          <ConversionInput
            onButtonPress={() =>
              navigation.push('CurrencyList', {
              title: 'Base Currency',
              activeCurrency: baseCurrency,
              onChange: (currency) => setBaseCurrency(currency),
            })
            }
            onChangeText={(text) => setValue(text)}
            text={baseCurrency}
            value={value}
            keyboardType='numeric'
          />
          <ConversionInput
            editable={false}
            keyboardType='numeric'
            onButtonPress={() =>
              navigation.push('CurrencyList', {
              title: 'Quote Currency',
              activeCurrency: quoteCurrency,
              onChange: (currency) => setQuoteCurrency(currency),
            })
            }
            text={quoteCurrency}
            value={value && `${(parseFloat(value) * conversionRate).toFixed(2)}`}
          />
        </View>
        <Text style={styles.text}>
          {`1 ${baseCurrency} equals ${conversionRate.toFixed(2)} ${quoteCurrency}`}
        </Text>
        <Button onButtonPress={() => swapCurrencies()} text='Reverse currencies' />
        {error && (
          <View style={styles.errorContainer}>
            <MaterialIcons color={COLORS.white} name='error' size={20} />
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        )}
      </View>
    </View>
  );
};
