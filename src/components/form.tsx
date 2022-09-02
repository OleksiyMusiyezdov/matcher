import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction, sendDataAction } from "../redux/actions";
import { Inputs } from "../redux/interfaces";
import { allDataSelector } from "../redux/selectors";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "../validation/validationSchema";
import { ErrorMessage } from "@hookform/error-message";

export default function Form() {
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      getDataAction(
        data.firstFirstName,
        data.firstSecondName,
        data.secondFirstName,
        data.secondSecondName
      )
    );
  };

  const defaultData = useSelector(allDataSelector);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>({
    defaultValues: defaultData,
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <>
        <Typography className="py-2" variant="h6">
          First person
        </Typography>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mr-2">
            <TextField
              id="first-first-name"
              label="First person's name"
              inputProps={{ ...register("firstFirstName"), required: true }}
            />
            <ErrorMessage
              errors={errors}
              name="firstFirstName"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="flex flex-col ml-2">
            <TextField
              id="first-surename"
              label="First person's surename"
              inputProps={{ ...register("firstSecondName"), required: true }}
            />
            <ErrorMessage
              errors={errors}
              name="firstSecondName"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
        </div>
      </>

      <>
        <Typography className="py-2" variant="h6">
          Second person
        </Typography>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mr-2">
            <TextField
              id="second-first-name"
              label="Second person's name"
              inputProps={{ ...register("secondFirstName"), required: true }}
            />
            <ErrorMessage
              errors={errors}
              name="secondFirstName"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
          <div className="flex flex-col ml-2">
            <TextField
              id="second-second-name"
              label="Second person's surename"
              inputProps={{ ...register("secondSecondName"), required: true }}
            />
            <ErrorMessage
              errors={errors}
              name="secondSecondName"
              render={({ message }) => <p>{message}</p>}
            />
          </div>
        </div>
      </>

      <div className="pt-6">
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
}
