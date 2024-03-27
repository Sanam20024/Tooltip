import Tooltip from './component/Tooltip';
import { AuthProvider } from './context';
function App() {
  return (
    // send props for the position of tootltip
    <AuthProvider>
    <Tooltip  position="bottom"/>
    </AuthProvider>
  );
}

export default App;
