import React, { useState } from "react";
import { Pressable, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
    onClick: (event: GestureResponderEvent) => void;
    text: string;
    variant?: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ onClick, text, variant = "primary" }) => {
    const [pressed, setPressed] = useState(false);

    const baseStyle = "mt-8 py-4 rounded-2xl";
    const variantStyles = {
        primary: pressed ? "bg-primary-dark" : "bg-primary",
        secondary: pressed ? "bg-secondary-darker" : "bg-secondary",
    };

    const textStyles = {
        primary: "text-white",
        secondary: pressed ? "text-secondary-dark" : "text-secondary-darker",
    };

    return (
        <Pressable
            onPressIn={() => setPressed(true)}
            onPressOut={() => setPressed(false)}
            onPress={onClick}
            className={`${baseStyle} ${variantStyles[variant]}`}
        >
            <Text className={`text-lg font-semibold text-center ${textStyles[variant]}`}>
                {text}
            </Text>
        </Pressable>
    );
};
