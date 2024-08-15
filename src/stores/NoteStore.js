import { defineStore } from "pinia";


export const useNoteStore = defineStore("notes", {
    state:() => ({
        notes: [
            {
                "id": 1,
                "title": "旅行計畫",
                "content": "明年暑假想去東京旅遊，準備好機票和住宿了。",
                "pinned": true
                },
                {
                "id": 2,
                "title": "學習計畫",
                "content": "每天晚上花一小時學習新技術，提升自己的能力。",
                "pinned": false
                },
                {
                "id": 3,
                "title": "閱讀計畫",
                "content": "今年計劃閱讀十本書，已經看完了三本。",
                "pinned": true
                },
                {
                "id": 4,
                "title": "運動計畫",
                "content": "每周至少三次運動，保持身體健康。",
                "pinned": true
                },
        ],
        keyword: null,
        searchResults: [],
    }),
    getters:{
        allNotes(state){
            return state.notes.filter(note => !note.pinned)
        },
        pinnedNotes(state){
            return state.notes.filter(note => note.pinned)
        }
    },
    actions:{
        addNote(title, content, router){
            if(!title) return
            const last_id = this.notes[this.notes.length - 1].id
            this.notes.push({
                id: last_id + 1,
                title,
                content,
                pinned: false,
            })
            router.push('/')
        },
        edditNote(id, title, content){
            const index = this.notes.findIndex((note) => note.id === id)
            if(index !== -1) {
                this.notes[index].title = title
                this.notes[index].content = content
            }            
        },
        togglePinned(id) {
            const index = this.notes.findIndex( note => note.id === id)
            if(index !== -1) {
                this.notes[index].pinned = !this.notes[index].pinned
            }
        },
        deleteNote(id){
            const index = this.notes.findIndex((note) => note.id === id)
            if(index !== -1){
                this.notes.splice(index, 1)
            }
        }, 
        serachNote(keyword){
            this.keyword = keyword.toLowerCase()
            this.searchResults = this.notes.filter(note =>
                note.title.toLowerCase().includes(this.keyword) ||
                note.content.toLowerCase().includes(this.keyword)
            )
        },
    }
})