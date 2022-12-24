import MainLayout from '@/layouts/main'
import FieldComponent from '@/components/Form/FieldComponent'

export const useGlobalComponents = (app) => {

   app.component("MainLayout",MainLayout)
   app.component("FieldComponent",FieldComponent)
}