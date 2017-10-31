import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  dateTouch: {
    display: 'flex',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#c9c9c9',
    paddingTop: 32,
    paddingBottom: 8,
  },
  dateInput: {
    // borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  dateText: {
    color: '#333'
  },
  placeholderText: {
    fontSize: 16,
    color: '#c9c9c9'
  },
  datePickerMask: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#00000077'
  },
  datePickerCon: {
    backgroundColor: '#fff',
    height: 0,
    overflow: 'hidden'
  },
  btnText: {
    position: 'absolute',
    top: 0,
    height: 42,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTextText: {
    fontSize: 16,
    color: '#46cf98'
  },
  btnTextCancel: {
    color: '#666'
  },
  btnCancel: {
    left: 0
  },
  btnConfirm: {
    right: 0
  },
  datePicker: {
    marginTop: 42,
    borderTopColor: '#ccc',
    borderTopWidth: 1
  },
  disabled: {
    backgroundColor: '#eee'
  }
});

export default style;
