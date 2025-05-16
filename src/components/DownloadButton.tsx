import {useState} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import "./DownloadButton.scss";

interface DownloadButtonProps {
    isReverse: boolean,
    btnLabel: string
}

const sheetsUrl = 'https://script.google.com/macros/s/AKfycbyLC74ibYXymfF4vDJ_kNLvKjwuxUhhbTjQhVcc5iJdNFDi6P4Ce4QC2U64xeKiOERb/exec';

export function DownloadButton({isReverse, btnLabel}: DownloadButtonProps) {
    const [open, setOpen] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [email, setEmail] = useState('');

    const handleClickOpen = () => {
        fetch(sheetsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                source: 'DownloadButton',
                type: 'click'
            })
        }).then(() => {
            console.log("réussi");
        });
        setOpen(true);
    };

    const handleShowForm = () => {
        setShowForm(true);
    };


    const handleClose = () => {
        setOpen(false);
    };

    function submitEmail(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        fetch(sheetsUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                source: 'DownloadButton',
                type: 'email',
                email: email
            })
        });

        setOpen(false);
        setShowForm(false);
        setEmail('');
    };

    return (
        <div className="download-button">
            <button onClick={handleClickOpen} className={isReverse ? "btn-download-reverse" : "btn-download"}>
                {btnLabel}
            </button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    className: 'download-popup'
                }}
            >
                <DialogTitle id="alert-dialog-title">
                    {"Téléchargement"}
                </DialogTitle>
                <DialogContent>
                    {showForm ? (
                        <>
                            <DialogContentText className="email-form-text">
                                Laisse-nous ton adresse mail, on te contactera dès la sortie de Mélanjeux !
                            </DialogContentText>
                            <form className="email-form" onSubmit={(e) => {submitEmail(e);}}>
                                <input
                                    type="email"
                                    required
                                    placeholder="tonadresse@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email-input"
                                />
                                <Button type="submit" className="contact-btn" autoFocus>
                                    Envoyer
                                </Button>
                            </form>
                        </>
                    ) : (
                        <>
                            <DialogContentText>
                                Merci pour l’intérêt que vous portez à notre projet !
                            </DialogContentText>
                            <DialogContentText>
                                Notre application est en cours de préparation… et on a hâte de vous la faire découvrir !
                            </DialogContentText>
                            <DialogContentText>
                                👉 Laissez-nous votre adresse mail et soyez les premiers à embarquer dès sa sortie. 👀🔐
                            </DialogContentText>
                        </>
                    )}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} className="quit-btn">Quitter</Button>
                    {!showForm && (
                        <Button onClick={handleShowForm} className="contact-btn" autoFocus>
                            Je veux garder contact !
                        </Button>
                    )}
                </DialogActions>

            </Dialog>
        </div>
    )
        ;
}