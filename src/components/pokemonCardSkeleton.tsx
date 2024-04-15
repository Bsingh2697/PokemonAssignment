import { Center, HStack, Skeleton, VStack } from "native-base"
import { View } from "react-native"

type Props = {
    showHeader ?: boolean
}

export const SkeletonList = ({showHeader} : Props) => {
    return (
        <View testID="skeleton-list">
        <Center w="100%" marginTop="20">
                {showHeader ? <HStack alignItems="center" marginBottom="2">
                    <Skeleton size="10" rounded="full" marginRight="4"/>
                    <Skeleton size="10" rounded="10" w="180"/>
                </HStack> : null}
                {showHeader ? <Skeleton mb="3" w="80" h="16" rounded="8" /> : null}
                <VStack w="100%" alignItems="center" marginTop="4">
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                    <Skeleton mb="3" w="80" h="20" rounded="8" />
                </VStack>
        </Center>
        </View>
    )
}