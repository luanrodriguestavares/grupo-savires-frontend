import React, { useState } from "react";
import { TextInput, Text, View } from "react-native";

interface InputProps {
    label: string;
    placeholder: string;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad" | "ascii-capable" | "numbers-and-punctuation" | "url" | "name-phone-pad" | "twitter" | "web-search";
    value: string;
    onChangeText: (text: string) => void;
    className?: string;
}

export function Input({ label, placeholder, keyboardType = "default", value, onChangeText, className }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View className="mb-4">
            <Text className="text-sm font-semibold text-secondary-dark mb-2">{label}</Text>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`border ${isFocused ? "border-primary-dark" : "border-secondary"} rounded-2xl py-4 px-2 ${className}`}
            />
        </View>
    );
}
