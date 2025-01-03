import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Input } from "../components/input";
import { Button } from "../components/button";

const logo: any = require("../../assets/images/logo_reduced.png");

export default function LoginScreen() {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View className="flex-1 bg-primary">
			<View className="h-1/5 flex items-center justify-center">
				<Image
					source={logo}
					className="h-20 w-20"
				/>
			</View>
			<View className="bg-background h-4/5 rounded-t-3xl px-6 pt-12">
				<Text className="text-2xl font-bold text-center text-gray-darker">
					Bem-vindo de volta
				</Text>
				<Text className="text-md font-light text-center text-gray-darker mb-8">
					Entre com suas credenciais.
				</Text>
				<Input
					label="Celular"
					placeholder="(88) 99999-9999"
					value={phoneNumber}
					onChangeText={setPhoneNumber}
					keyboardType="phone-pad"
				/>
				<Input
					label="Senha"
					placeholder="************"
					value={password}
					onChangeText={setPassword}
				/>
				<Button
					onClick={() => console.log("lógica para o login")}
					text="Entrar"
					variant="primary"
				/>
			</View>
		</View>
	);
}
