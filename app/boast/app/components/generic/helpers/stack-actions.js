import { NavigationActions } from 'react-navigation'

export const resetAction = routeName => 
  NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName })
    ]
})
