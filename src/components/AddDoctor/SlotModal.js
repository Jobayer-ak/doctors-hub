import React from "react";
import { useForm } from "react-hook-form";

const SlotModal = ({ setModalData }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(typeof data);
    console.log("Modal Data: ", data.slot);
    setModalData(data.slot);
  };

  return (
    <div className="text-center">
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="px-8  py-4 rounded-md relative bg-[#381f6e]">
          <div className="">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-3 top-2"
            >
              ✕
            </label>

            {/* docto time slot start */}
            <div className="px-7 pb-2.5 text-center">
              <form
                className="mt-8 text-center relative"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mt-8 lg:mt-0 mb-8">
                  <ul className="grid grid-cols-2 gap-12 text-white">
                    <li>
                      <input
                        type="checkbox"
                        id="s1"
                        value="6.00pm- 6.30pm"
                        checked
                        {...register("slot")}
                      />
                      <label for="cb1" className="ml-2">
                        6.00pm - 6.30pm
                      </label>
                    </li>
                    <li className="">
                      <input
                        type="checkbox"
                        id="s2"
                        value="6.30pm - 7.00pm"
                        {...register("slot")}
                      />
                      <label for="cb2" className="ml-2">
                        6.30pm - 7.00pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s3"
                        value="7.00pm - 7.30pm"
                        {...register("slot")}
                      />
                      <label for="cb2" className="ml-2">
                        7.00pm - 7.30pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s4"
                        value="7.30pm - 8.00pm"
                        {...register("slot")}
                      />
                      <label for="cb2" className="ml-2">
                        7.30pm - 8.00pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s5"
                        value="8.00pm - 8.30pm"
                        {...register("slot")}
                      />
                      <label for="cb2" className="ml-2">
                        8.00pm - 8.30pm
                      </label>
                    </li>
                    <li>
                      <input
                        type="checkbox"
                        id="s6"
                        value="8.30pm - 9.00pm"
                        {...register("slot")}
                      />
                      <label for="cb2" className="ml-2">
                        8.30pm - 9.00pm
                      </label>
                    </li>
                  </ul>

                  {/* <input
                    id="slot1"
                    className=""
                    type="checkbox"
                    value={6.0 - 6.3}
                    {...register("slot", {
                      required: "Slot is required!",
                    })}
                  />
                  <lebel htmlFor="slot1" className="text-white">
                    6.00pm-6.30pm
                  </lebel>
                  <input
                    id="slot2"
                    className=""
                    type="checkbox"
                    value={7.0 - 7.3}
                    {...register("slot", {
                      required: "Slot is required!",
                    })}
                  />
                  <lebel htmlFor="slot2" className="text-white">
                    7.00pm-7.30pm
                  </lebel>
                  {errors.slot && (
                    <p className="text-white mt-2">{errors.slot?.message}</p>
                  )} */}
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
