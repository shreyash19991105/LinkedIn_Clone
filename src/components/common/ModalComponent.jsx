import  { useState } from 'react';
import { Button, Modal } from 'antd';
import "./ModalComponent.scss"
import { PostStatus } from '../../api/FirestoreAPI';
import { getCurrentTimeStamp } from './Moment';

const ModalComponent = ({currentUser}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  let userEmail = localStorage.getItem("userEmail");
  const sendStatus= async (status)=>{
    let object ={
      status:status,
      timeStamp:getCurrentTimeStamp("LLL"),
      userEmail:userEmail,
      userName:currentUser.name,
    }
    await PostStatus(object);
    await setModalOpen(false);
    await setStatus("");
  }
  return (
    <>
     
      <Button className="post-button"onClick={() => setModalOpen(true)}>
        Start a Post
      </Button>
      <Modal
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={
          [<Button key="submit" type="primary" disabled={status.length>0?false:true} onClick ={()=>sendStatus(status)} >Post</Button>,]
        }
      >
       <input className ="modal-input" placeholder="What do you want to talk about ?" value ={status} onChange={()=>setStatus(event.target.value) }/>
      </Modal>
    </>
  );
};
export default ModalComponent;