import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const SlotModal = ({ setModalData }) => {
  const {
    register,
    // formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    if (data.slot.length <= 3) {
      return Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to select at least 4 time slots.',
      });
    }

    setModalData(data.slot);
    reset();
  };

  return (
    <div className="text-center">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="mx-2 px-5 md:px-7 py-4 rounded-lg relative bg-[#381f6e]">
          <div className="">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-3 top-2"
            >
              ✕
            </label>

            {/* docto time slot start */}
            <div className="md:px-4 pb-2.5 text-center">
              <h2 className="font-bold text-xl text-white">
                Doctor's Time Slot
              </h2>
              <form
                className="mt-8 text-center relative"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mt-8 lg:mt-0 mb-8">
                  <ul className="grid grid-cols-2 gap-4 lg:gap-6 text-white">
                    <li className="">
                      <input
                        type="checkbox"
                        id="s1"
                        value="5.00pm- 5.30pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb1" className="ml-2">
                        5.00pm - 5.30pm
                      </label>
                    </li>
                    <li className="">
                      <input
                        type="checkbox"
                        id="s2"
                        value="5.30pm - 6.00pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        5.30pm - 6.00pm
                      </label>
                    </li>
                    <li className="">
                      <input
                        type="checkbox"
                        id="s3"
                        value="6.00pm - 6.30pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb1" className="ml-2">
                        6.00pm - 6.30pm
                      </label>
                    </li>
                    <li className="">
                      <input
                        type="checkbox"
                        id="s4"
                        value="6.30pm - 7.00pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        6.30pm - 7.00pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s5"
                        value="7.00pm - 7.30pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        7.00pm - 7.30pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s6"
                        value="7.30pm - 8.00pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        7.30pm - 8.00pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s7"
                        value="8.00pm - 8.30pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        8.00pm - 8.30pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s8"
                        value="8.30pm - 9.00pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        8.30pm - 9.00pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s9"
                        value="9.00pm - 9.30pm"
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        9.00pm - 9.30pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s10"
                        value="9.30pm - 10.00pm"
                        className=""
                        {...register('slot')}
                      />
                      <label htmlFor="cb2" className="ml-2">
                        9.30pm - 10.00pm
                      </label>
                    </li>
                  </ul>
                </div>

                <input
                  className="text-center text-white font-bold bg-[#722ed1] hover:bg-[#9258e5] transition-all p-2 w-full max-w-sm cursor-pointer rounded-sm"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
          {/* doctor time sloit end */}
        </div>
      </div>
    </div>
  );
};

export default SlotModal;
