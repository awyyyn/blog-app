import React from 'react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Textarea,
} from '@nextui-org/react';
import { useCreatePostStore } from '../../store/createPostStore';

const CreatePostModal = () => {
  const { modal, setModal } = useCreatePostStore();

  return (
    <Modal isOpen={modal.isOpen} placement="top-center" onOpenChange={setModal}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <Input
                type="email"
                label="Title"
                labelPlacement="outside"
                placeholder="Blog titlez"
              />
              <Textarea
                type="text"
                multiple
                height={200}
                label="Description"
                labelPlacement="outside"
                placeholder="Blog description..."
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
