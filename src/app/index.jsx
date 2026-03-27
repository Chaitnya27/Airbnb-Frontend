import { Toaster } from "@/components/ui/sonner"
import Router from "./router"
import AuthContextProvider from "@/lib/provider/auth-context-provider"

const App = () => {
  return (
    <AuthContextProvider>
      <Router />
      <Toaster position="top-center" richColors />
    </AuthContextProvider>
  )
}

export default App