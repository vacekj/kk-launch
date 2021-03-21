import {
	Button,
	HStack,
	Input,
	useColorModeValue,
	VStack,
	useToast,
	Icon,
} from "@chakra-ui/react";
import { HiCheck } from "react-icons/hi";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/router";
import strings from "../strings";

export const qs = (params: { [x: string]: string | number | boolean }) =>
	Object.keys(params)
		.map(
			(key) =>
				`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
		)
		.join("&");

export default function MailCTA() {
	const { locale } = useRouter();
	const { register, handleSubmit } = useForm({
		mode: "onChange",
	});
	const [loading, setLoading] = useState(false);
	const toast = useToast();
	const inputBg = useColorModeValue("white", "gray.700");
	const [succ, setSucc] = useState(false);

	function onSubmit(data: any) {
		setLoading(true);
		fetch("/api/subscribe?" + qs(data), {
			method: "POST",
		})
			.then((res) => {
				if (!res.ok) {
					throw res;
				}
				setSucc(true);
				toast({
					title: strings[locale!].success,
					description:
						"Další informace dostanete den před spuštěním emailem",
					status: "success",
					duration: 5000,
					position: "top",
					isClosable: true,
				});
			})
			.catch((err) => {
				toast({
					title:
						err.status === 409
							? "Email je již registrován"
							: "Vyskytla se chyba",
					description:
						err.status === 409
							? ""
							: "Kontaktuje nás prosím na podpora@kryptokurzy.cz",
					status: "error",
					duration: 5000,
					isClosable: true,
				});
			})
			.finally(() => setLoading(false));
	}

	return (
		<VStack alignItems={"start"}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<HStack w="full" spacing={0}>
					<Input
						ref={register({
							required: true,
							minLength: 5,
							maxLength: 60,
							pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
						name={"email"}
						focusBorderColor={"brand.400"}
						size={"lg"}
						w={"full"}
						bg={inputBg}
						color={"black"}
						type={"email"}
						autoComplete={"email"}
						placeholder={strings[locale!].email}
						borderRightRadius={0}
						mr={0}
						aria-label={"Email"}
					/>
					<Button
						variant={succ ? "solid" : "brand"}
						colorScheme={succ ? "green" : null}
						ml={0}
						size="lg"
						type={"submit"}
						isLoading={loading}
						borderLeftRadius={0}
					>
						{succ ? <Icon as={HiCheck} /> : "Rezervovat"}
					</Button>
				</HStack>
			</form>
		</VStack>
	);
}
