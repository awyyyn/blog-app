import { useForm, SubmitHandler } from 'react-hook-form';
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
import { userStore } from '../../store/userStore';
import { useNavigate } from 'react-router-dom';
import { CREATE_POST } from '../../gql/mutations/post';

type Input = {
  title: string;
  description: string;
};

const CreatePostModal = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const { modal, setModal } = useCreatePostStore();
  const { user } = userStore();
  const [createPost, { loading, error }] = useMutation(CREATE_POST);
  // const []

  const onSubmit: SubmitHandler<Input> = async (values) => {
    createPost({
      variables: {
        postInput: {
          description: values.description,
          title: values.title,
          userId: user.id as string,
        },
      },
    }).then((data) => {
      setModal(false);
      reset();
      navigate(`/post/${data?.data?.createPost.id}`);
    });
  };

  if (error) throw new Error(error.message);
  return (
    <Modal isOpen={modal.isOpen} placement="center" onOpenChange={setModal}>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1">
              Modal Title
            </ModalHeader>
            <ModalBody>
              <Input
                {...register('title', { required: true })}
                name="title"
                type="text"
                disabled={loading}
                label="Title"
                labelPlacement="outside"
                placeholder="Blog title"
                errorMessage={errors.title && 'Content is required!'}
              />
              <Textarea
                {...register('description', { required: true })}
                type="text"
                errorMessage={errors.description && 'Content is required!'}
                multiple
                disabled={loading}
                height={200}
                label="Description"
                labelPlacement="outside"
                placeholder="Blog description..."
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="danger"
                variant="light"
                onPress={() => {
                  reset();
                  onClose();
                }}
              >
                Close
              </Button>
              <Button color="primary" isLoading={loading} type="submit">
                Create
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
