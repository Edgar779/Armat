import React from "react";
import { Svg } from "../../assets/images";
import { Controller } from "react-hook-form";

export const CustomPassword = ({
  defaultValue,
  control,
  name,
  idInput,
  placeholder,
  eyeState,
  openEyeState,
  errMessageToShow,
}) => {
  /**
   * Custom Password.
   */

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={{ required: true }}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <div className="input-password">
          <div
            className={`group-input password-box ${
              error?.type ? "error-border" : "input-border"
            } `}
          >
            <div className="icon-input">
              <img
                src={
                  error?.type
                    ? Svg.LockRed
                    : errMessageToShow
                    ? Svg.LockRed
                    : Svg.Lock
                }
                alt="Lock"
              />
            </div>

            <input
              onChange={onChange}
              onBlur={onBlur}
              type={eyeState ? "text" : "password"}
              className={`form-control   ${
                error?.type
                  ? "error-border"
                  : errMessageToShow
                  ? "error-border"
                  : ""
              } `}
              id={idInput}
              name={name}
              placeholder={placeholder}
              ref={ref}
            />
            <div className="password-input" onClick={() => openEyeState()}>
              {eyeState ? (
                <img
                  src={
                    error?.type
                      ? Svg.EyeRedOpen
                      : errMessageToShow
                      ? Svg.EyeRedOpen
                      : Svg.EyeOpen
                  }
                  alt="Eye-Open"
                />
              ) : (
                <img
                  src={
                    error?.type
                      ? Svg.EyeRedClose
                      : errMessageToShow
                      ? Svg.EyeRedOpen
                      : Svg.EyeClose
                  }
                  alt="Eye-Close"
                />
              )}
            </div>
          </div>
          <p className="error-messages">
            {errMessageToShow
              ? errMessageToShow
              : error?.type === "required"
              ? "This Password is required"
              : error?.message}
          </p>
        </div>
      )}
    />
  );
};
