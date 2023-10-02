import { Space, Spin } from "antd";
import "./Loader.scss";
function Loader() {
  return (
    <div className="loader">
      <p>Loading..Please wait..</p>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  );
}

export default Loader;
