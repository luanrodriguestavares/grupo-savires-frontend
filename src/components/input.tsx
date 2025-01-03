import React, { useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Biblioteca de ícones

interface InputProps {
    label: string;
    placeholder: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    value: string;
    onChangeText: (text: string) => void;
    className?: string;
    mask?: "phone" | "cpf" | "custom";
    customMask?: (value: string) => string;
    secureTextEntry?: boolean;
}

export function Input({
    label,
    placeholder,
    keyboardType = "default",
    value,
    onChangeText,
    className,
    mask,
    secureTextEntry = false,
}: InputProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

    const applyMask = (text: string) => {
        if (mask === "phone") {
            return text
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
                .slice(0, 15);
        } else if (mask === "cpf") {
            return text
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
                .slice(0, 14);
        }
        return text;
    };

    return (
        <View className="mb-4">
            <Text className="text-sm font-semibold text-secondary-dark mb-2">{label}</Text>
            <View
                className={`flex-row items-center border ${isFocused ? "border-primary-dark" : "border-secondary"
                    } rounded-2xl py-1.5 px-2 ${className}`}
            >
                <TextInput
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    value={value}
                    onChangeText={(text) => onChangeText(applyMask(text))}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={!isPasswordVisible && secureTextEntry}
                    className="flex-1"
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                        style={{ paddingRight: 8 }}
                    >
                        <Ionicons
                            name={isPasswordVisible ? "eye-off" : "eye"}
                            size={24}
                            color="gray"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
}
