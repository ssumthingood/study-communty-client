import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
    label: string;
    name: string;
    type: string;
    register: UseFormRegisterReturn;
    required: boolean;
    placeholder: string;
    className?: string;
}

export default function Input({ label, name, register, type, placeholder, required, className }: InputProps) {
    return <input id={name} required={required} {...register} type={type} placeholder={placeholder} className={className} />;
}
