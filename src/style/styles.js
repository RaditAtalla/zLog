import {StyleService, useTheme} from '@ui-kitten/components';

const globalStyles = StyleService.create({
  input: {
    borderColor: 'color-primary-500',
    borderWidth: 2,
  },
  menuButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 30,
    backgroundColor: 'color-primary-500',
    borderColor: 'color-primary-600',
  },
  pageTitle: {
    fontSize: 35,
    textAlign: 'center',
    color: 'color-primary-400',
    fontFamily: 'Inter-Bold',
  },
  logo: {
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  layout: {
    height: '100%',
    paddingTop: 20,
  },
  button: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    borderRadius: 5,
  },
  title: {
    marginBottom: 50,
    fontSize: 36,
    fontFamily: 'Inter-Bold',
    color: '#4990CA',
    textAlign: 'center',
  },
});

export default globalStyles;
