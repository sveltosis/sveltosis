import { useContext, createSignal } from "solid-js";
import { Dynamic } from "solid-js/web";
function Context(props) {
  const [activeTab, setActiveTab] = createSignal(0);
  const disabled = useContext("disabled");
  return <Dynamic component={"activeTab".Provider}>
      <div>
        Is disabled?
        {disabled}
      </div>
    </Dynamic>;
}
export default Context;