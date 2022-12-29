import MainLayout from '@/layouts/main'
import FieldComponent from '@/components/Form/FieldComponent'
import FieldSelect from '@/components/Form/FieldSelect'

export const useGlobalComponents = (app) => {

   app.component("MainLayout",MainLayout)
   app.component("FieldComponent",FieldComponent)
   app.component("FieldSelect",FieldSelect)
}