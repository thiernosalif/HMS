import React from 'react'
import {Button, PasswordInput, SegmentedControl, TextInput} from "@mantine/core";
import {IconHeartbeat} from "@tabler/icons-react";
import {useForm} from "@mantine/form";
import {Link} from "react-router-dom";

const registerPage = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm({
        initialValues: {
            type: "PATIENT",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email address"),
            password: (value) =>(!value?"Password is required": null),
            confirmPassword: (value, values) =>(value === values.password ? null :
                "Password don't match"),
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    }

    return (
        <div style={{background: 'url("/bg.jpg")'}} className="w-screen h-screen !bg-cover !bg-center
        !bg-no-repeat flex flex-col items-center justify-center">
            <div className=' py-3  text-pink-500 flex gap-1 items-center'>
                <IconHeartbeat size={45} stroke={2.5}/>
                <span className='font-heading font-semibold text-4xl'>Pulse</span>
            </div>
            <div className="w-[450px] backdrop-blur-md p-10 py-8 rounded-lg">
                <form onSubmit={form.onSubmit(handleSubmit)}
                      className="flex flex-col gap-5 [&_input]:placeholder-neutral-100
                [&_.mantine-Input-input]:!border-white
                 focus-within:[&_.mantine-Input-input]:!border-pink-400 [&_.mantine-Input-input]:!border
                 [&_input]:pl-2 [&_svg]:text-white [&_input]:!text-white">
                    <div className="self-center font-medium font-heading text-white text-xl">Register</div>
                    <SegmentedControl {...form.getInputProps("type")} fullWidth radius="md" size="md"
                                      color="pink" bg="none"
                                      className="[&_*]: !text-white border border-white"
                                       data={[{label: 'Patient', value: "PATIENT"},
                                           {label: 'Doctor', value: "DOCTOR"},
                                           {label: 'Admin', value: "ADMIN"},
                    ]}
                    />
                    <TextInput {...form.getInputProps('email')} className='transition duration-300' variant="unstyled" size="md" radius="md" placeholder="Email" />
                    <PasswordInput {...form.getInputProps('password')} className='transition duration-300' variant="unstyled" size="md" radius="md" placeholder="Password" />
                    <PasswordInput {...form.getInputProps('confirmPassword')} className='transition duration-300'
                                   variant="unstyled" size="md" radius="md" placeholder="confirm Password" />

                    <Button radius="md" size='md'
                            type="submit" color="pink">register</Button>

                    <div className="text-neutral-100 text-sm self-center">
                        have an account ?
                        <Link to="/login" className="hover:underline"> Login</Link></div>
                </form>
            </div>
        </div>
    )
}
export default registerPage
