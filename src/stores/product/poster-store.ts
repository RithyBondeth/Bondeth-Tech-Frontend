import { create } from "zustand"

type PosterSate = {
    posterIndex: number
    fowardPoster: (posterLength: number) => void
    backPoster: (posterLength: number) => void
}

export const usePosterStore = create<PosterSate>((set) => ({
    posterIndex: 0,
    fowardPoster: (posterLength) => set((state) => ({
        posterIndex: state.posterIndex < posterLength - 1 ? state.posterIndex + 1 : 0
    })),
    backPoster: (posterLength) => set((state) => ({
        posterIndex: (state.posterIndex > 0 && state.posterIndex <= posterLength) ? state.posterIndex - 1 : posterLength - 1
    }))
}))