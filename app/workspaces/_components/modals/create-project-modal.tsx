import React, { useRef, useState, useEffect } from 'react';
import { X } from 'lucide-react'; // Importing the X icon from Lucide React
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useMobxStore } from '@/store/store.provider';
import ProjectCreateForm from '@/components/forms/account/project-create-form';
import { ICreateProjectForm } from '@/types/project';
import Image from 'next/image';

/* 
  Updated by: Archana K on July 16th, 2024 - Added popovers for emoji picker and file uploader and created their corresponding buttons.
             
*/

interface CreateProjectModalProps {
  openModal: () => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ }) => {
  const {
    project: { createProject },
  } = useMobxStore();

  const [backgroundImage, setBackgroundImage] = useState<string>(
    'https://i.pinimg.com/originals/13/d0/90/13d0903cbcd0e0205c5fe0a3546f59fd.jpg'
  );
  const [isPopoverVisible, setPopoverVisible] = useState<boolean>(false);
  const [isUploading, setUploading] = useState<boolean>(false);
  const [isButtonEnabled, setButtonEnabled] = useState<boolean>(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [selectedEmoji, setSelectedEmoji] = useState<string>('😀');
  const [isModalOpen, setModalOpen] = useState<boolean>(true); // Added state for modal visibility
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const resetModalState = () => {
    setBackgroundImage('https://i.pinimg.com/originals/13/d0/90/13d0903cbcd0e0205c5fe0a3546f59fd.jpg');
    setPopoverVisible(false);
    setUploading(false);
    setButtonEnabled(false);
    setShowEmojiPicker(false);
    setSelectedEmoji('😀');
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ICreateProjectForm = {
      name: formData.get('name') as string,
      identifier: formData.get('identifier') as string,
      description: formData.get('description') as string,
      emoji_and_icon: selectedEmoji,
      network: 0,
      project_lead_member: undefined,
      project_lead: '',
      cover_image: '',
      icon_prop: undefined,
      emoji: ''
    };
    // return createProject(data); // Assuming createProject is expecting ICreateProjectForm type
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setBackgroundImage(reader.result as string);
          setButtonEnabled(true); // Enable the button when the image is changed
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePopover = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCancel = () => {
    setPopoverVisible(false);
  };

  const handleUploadAndSave = async () => {
    setUploading(true);
    // Simulate image upload with a timeout (replace this with actual upload logic)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setUploading(false);
    setButtonEnabled(false);
    setPopoverVisible(false);
  };

  const onEmojiClick = (emojiObject: EmojiClickData) => { // Updated to use EmojiClickData type
    console.log('Selected Emoji:', emojiObject.emoji); // Debugging line
    setSelectedEmoji(emojiObject.emoji);
    setShowEmojiPicker(false); // Close the emoji picker after selecting an emoji
  };

  const closeModal = () => {
    resetModalState();
    setModalOpen(false); // Close the modal by setting the state to false
  };

  return (
    <div>
      {isModalOpen && (
        <dialog className="border-3 left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto flex justify-center items-center open">
          <div className="bg-white m-auto p-4 w-[45%] h-[70%] rounded-md relative">
            <div className="flex flex-col h-full w-full">
              <div
                className="relative flex flex-col bg-cover bg-center w-full border-2 h-64 rounded-md"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                }}
              >
                <div className="p-4 justify-item-left">
                  <div className="flex justify-end">
                    <X className="text-white text-sm h-24px w-24px cursor-pointer" onClick={closeModal} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-4 flex items-center space-x-2">
                  <div className="relative">
                    <button
                      type="button"
                      className="grid h-11 w-11 place-items-center rounded-md bg-gray-200"
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                    >
                      {selectedEmoji}
                    </button>
                    {showEmojiPicker && (
                      <div
                        ref={emojiPickerRef}
                        className="absolute top-full left-0 mt-2 z-10"
                      >
                        <EmojiPicker onEmojiClick={onEmojiClick} />
                      </div>
                    )}
                  </div>
                </div>
                <button
                  type="button"
                  className="absolute bottom-4 right-4 bg-white text-black py-1 px-2 rounded-md"
                  onClick={togglePopover}
                >
                  Change Cover
                </button>
                {isPopoverVisible && (
                  <div className="absolute top-full mt-2 right-0 bg-white rounded-md z-10 shadow-lg">
                    <div className="flex flex-col overflow-auto rounded border border-custom-border-300 bg-custom-background-100 p-3 shadow-2xl md:h-[28rem] md:w-[36rem]">
                      <span className="inline-block rounded bg-gray-200 p-1" role="tablist" aria-orientation="horizontal">
                        <button className="rounded px-2 py-1 text-center text-white bg-blue-600 text-sm outline-none transition-colors text-custom-text-100" id="unsplash-tab" role="tab" type="button" aria-selected="false" tabIndex={-1} onClick={triggerFileInput}>
                          Upload
                        </button>
                      </span>
                      <div className="vertical-scrollbar scrollbar-md h-full w-full flex-1 overflow-y-auto overflow-x-hidden">
                        <div className="mt-4 h-full w-full" id="upload-panel" role="tabpanel" aria-labelledby="upload-tab" tabIndex={0}>
                          <div className="flex h-full w-full flex-col gap-y-2">
                            <div className="flex w-full flex-1 items-center gap-3">
                              <div role="presentation" tabIndex={0} className="relative grid h-full w-full cursor-pointer place-items-center rounded-lg p-12 text-center focus:outline-none focus:ring-2 focus:ring-custom-primary focus:ring-offset-2">
                                <button
                                  type="button"
                                  className="absolute right-0 top-0 z-40 -translate-y-1/2 rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-custom-text-200"
                                  onClick={triggerFileInput}
                                >
                                  Edit
                                </button>
                                <Image
                                  alt="image"
                                  className="rounded-lg"
                                  src={backgroundImage}
                                  style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', objectFit: 'cover', color: 'transparent' }}
                                />
                                <input
                                  ref={fileInputRef}
                                  type="file"
                                  accept="image/*,.png,.jpg,.jpeg,.svg,.webp"
                                  onChange={handleImageChange}
                                  style={{ display: 'none' }}
                                />
                              </div>
                            </div>
                            <p className="text-sm text-gray-600 text-custom-text-200">File formats supported- .jpeg, .jpg, .png, .webp, .svg</p>
                            <div className="flex h-12 items-start justify-end gap-2">
                              <button
                                type="button"
                                className="text-custom-text-200 bg-custom-background-100 border border-custom-border-200 hover:bg-custom-background-90 focus:text-custom-text-300 focus:bg-custom-background-90 px-3 py-1.5 font-medium text-sm rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center"
                                onClick={handleCancel}
                              >
                                Cancel
                              </button>
                              <button
                                type="button"
                                className={`text-white custom-text-200 ${isButtonEnabled ? 'bg-blue-500 text-white' : 'bg-blue-300 custom-primary-100 cursor-not-allowed'} border border-custom-border-200 hover:bg-custom-background-90 focus:text-custom-text-300 focus:bg-custom-background-90 px-44 py-1.5 font-medium text-sm rounded flex items-center gap-1.5 whitespace-nowrap transition-all justify-center`}
                                disabled={!isButtonEnabled}
                                onClick={handleUploadAndSave}
                              >
                                {isUploading ? 'Uploading...' : 'Upload and Save'}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <form onSubmit={onSubmit} className="flex flex-col h-full w-full space-y-4">
                <ProjectCreateForm />
                <div className="flex justify-end space-x-4">
                  
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};
export default CreateProjectModal;