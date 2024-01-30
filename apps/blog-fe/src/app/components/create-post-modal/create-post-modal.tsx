import React, { ChangeEvent, useState } from 'react';
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
import { useMutation } from '@apollo/client';
import { CREATE_POST } from '../../queries/queries';
import { userStore } from '../../store/userStore';

const CreatePostModal = () => {
  const { modal, setModal } = useCreatePostStore();
  const { user } = userStore();
  const [blog, setBlog] = useState({
    title: '',
    description: '',
  });
  const [createPost, { loading, error, data }] = useMutation(CREATE_POST);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBlog((blog) => ({
      ...blog,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreatePost = async (close: () => void) => {
    createPost({
      variables: {
        postInput: {
          description: blog.description,
          title: blog.title,
          userId: user.id,
        },
      },
    }).then((data) => {
      close();
      setBlog({
        description: '',
        title: '',
      });
    });
  };

  if (error) throw new Error(error.message);
  console.log(data && data);
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
                value={blog.title}
                name="title"
                onChange={handleChange}
                type="text"
                disabled={loading}
                label="Title"
                labelPlacement="outside"
                placeholder="Blog title"
              />
              <Textarea
                value={blog.description}
                name="description"
                onChange={handleChange}
                type="text"
                multiple
                disabled={loading}
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
              <Button
                color="primary"
                isLoading={loading}
                onPress={() => handleCreatePost(onClose)}
              >
                Create
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
